import pandas as pd
import re
import zipfile
import requests
import fire
import os

SEC_URL = 'https://www.sec.gov/data/foiadocsfailsdatahtm'
SEC_OUTPUT = 'sec_data'

class Patterns:
    sec_file = r'files.*\.zip'


          

def download_sec_data():
    '''Downloads and extracts zip files from `SEC_URL`.'''
    if not os.path.exists(SEC_OUTPUT):
        os.makedirs(SEC_OUTPUT)
    
    ZIP_DIR = 'sec_data_zipped'
    if not os.path.exists(ZIP_DIR):
        os.makedirs(ZIP_DIR)

    html = requests.get(SEC_URL).text
    filenames = re.findall(Patterns.sec_file, html)
    
    file_urls = []
    for fname in filenames:
        local_fname = f"{fname.split('/')[-1].split('.')[0]}"
        source_url = f'https://www.sec.gov/{fname}'
        zip_path_local = os.path.join(ZIP_DIR, f'{local_fname}.zip')
        output_dir_local = os.path.join(SEC_OUTPUT, f'{local_fname}')

        # Save zip to disk
        this_file = requests.get(source_url, stream=True)

        if os.path.exists(zip_path_local):
            continue

        with open(zip_path_local, 'wb') as f:
            for chunk in this_file.iter_content(chunk_size=128):
                f.write(chunk)

        print(f'Download Success! Zipfile saved to {zip_path_local}')
        # Exctract zip
        with zipfile.ZipFile(zip_path_local) as z:
            z.extractall(output_dir_local)
        print(f'Extracted files saved to {output_dir_local}')


def combine_sec_data(save=True):
    '''Combines separate csv files into a single file.''' 
    if not os.path.exists(SEC_OUTPUT):
        raise FileNotFoundError('No sec data found!')

    output_dirs = os.listdir(SEC_OUTPUT)
    final_dfs = []
    for d in output_dirs:
        fullpath = os.path.join(SEC_OUTPUT, d)
        filenames = os.listdir(fullpath)
        local_dfs = [] 
        for filename in filenames:
            print(filename)
            local_dfs.append(
                pd.read_csv(
                    os.path.join(fullpath, filename),
                    delimiter='|',
                    error_bad_lines=False,
                    index_col=False
                )
            )
        final_dfs.append(pd.concat(local_dfs))

    result = pd.concat(final_dfs)

    # Remove extraneous rows
    result.dropna(subset=[
        'CUSIP', 'SYMBOL', 'QUANTITY (FAILS)', 'DESCRIPTION', 'PRICE'
    ], inplace=True)

    if save:
        result.to_csv('sec_data_full.csv', index=False)
    
    return result





    
    
    
if __name__ == '__main__':
    fire.Fire()
