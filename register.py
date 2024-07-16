import requests

registration_url = "http://20.244.56.144/test/register"
registration_data = {
    "companyName": "SastraXmohit",
    "ownerName": "Mohit Raj",
    "rollNo": "125015175",
    "ownerEmail": "mohitrajsingh2601@gmail.com",
    "accessCode": "LGcHvG"
}

response = requests.post(registration_url, json=registration_data)
print(response.json())
