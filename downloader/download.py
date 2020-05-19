import requests
import sys
import re
import json
import time
from BeautifulSoup import BeautifulSoup

BASE_URL = "http://www.visualpatterns.org"
websites = [BASE_URL]
websitePattern = "http://www.visualpatterns.org/{}1-{}0.html"
counter = 0
solutions = {}
types = {}

for i in range(2,38, 2):
    websites.append(websitePattern.format(i, i+2));

for website in websites:
    r = requests.get(url = website)
    parsed_html = BeautifulSoup(r.text)
    patterns = parsed_html.body.find('div', attrs={'class':'imageGallery'}).contents

    for pattern in patterns:
        if(str(pattern).startswith("<div")):
            image = BASE_URL + pattern.div.div.div.div.a.get("href")
            if "uploads" not in image:
                continue
            text = pattern.div.div.div.div.a.get("title")

            try:
                if "Volume" in text:
                    found = re.search('Volume in step 43 = ([0-9]+)', text).group(1)
                else:
                    found = re.search('step 43 = ([0-9]+)', text).group(1)
                    objType = re.search(' (.+) in step 43', text).group(1)
                    if "step" in objType:
                        objType = re.search(' (.+) in step 43', objType).group(1)
                    else:
                        objType = objType.split()[-1]

                # with open('../img/{}.jpg'.format(counter), 'wb') as handle:
                #     response = requests.get(image, stream=True)
                #
                #     for block in response.iter_content(1024):
                #         if not block:
                #             break
                #
                #         handle.write(block)

                solutions[counter] = int(float(found))
                types[counter] = objType
            except AttributeError:
                # AAA, ZZZ not found in the original string
                found = '' # apply your error handling
            print(counter)
            counter += 1
    print(website)

# json = json.dumps(solutions)
# f = open("solutions.json","w")
# f.write(json)
# f.close()
json = json.dumps(types)
f = open("object_types.json","w")
f.write(json)
f.close()
