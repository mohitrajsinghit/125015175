import requests

auth_url = "http://20.244.56.144/test/auth"
auth_data = {
    "companyName": "SastraXmohit",
    "clientID": "9202489e-76c9-4cee-97ae-383c7209cead",
    "clientSecret": "FtSDIgNDmCIiaSyO",
    "ownerName": "Mohit Raj",
    "ownerEmail": "mohitrajsingh2601@gmail.com",
    "rollNo": "125015175"
}

response = requests.post(auth_url, json=auth_data)
print(response.json())
