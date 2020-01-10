import requests
from pprint import pprint


def main():
    URL = "https://wger.de/api/v2/exerciseinfo/"
    res = requests.get(url=URL)
    data = res.json()
    pprint(data['results'])
    while data['next']:
        URL = data['next']
        res = requests.get(url=URL)
        data = res.json()
        pprint(data['results'])


if __name__ == "__main__":
    main()
