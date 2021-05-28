
# For each file, add a download.py line
# Any additional processing on the downloaded file

HERE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Surnames Dataset
mkdir -p $HERE/surnames
if [ ! -f $HERE/surnames/surnames.csv ]; then
    python download.py 1MBiOU5UCaGpJw2keXAqOLL8PCJg_uZaU $HERE/surnames/raw_data.csv # 6
fi