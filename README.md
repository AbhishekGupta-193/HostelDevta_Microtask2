# HostelDevta_Microtask2

# Functionality of this Microservice

Performs three tasks : 

1)Error Handling

2)Visitor Count

3)Authentication

# Deployed Link 

https://df42ds.deta.dev/


# AUTHENTICATION PART

# Creating New User Credentials (POST)

Endpoint: '/createUser'

Body parameter(in JSON)
1. username
2. email
3. password

# Login using Credentials (POST)

Endpoint: '/loginUser'

Body parameter(in JSON)
1. email
2. password

# Delete USer Credentials (POST)

Endpoint: "/deleteUser"

Header parameter
1. auth-token

# Update User Credentials (PUT)

Endpoint: '/updateUser'

Header parameter
1. auth-token

Body parameter (in JSON)
1. username
2. email
3. password

# VISITOR COUNT API

# To add the count of visitors continuosly (POST)

Endpoint: '/countVisitors'

# To get the count the visitors (GET)

Endpoint: '/getCountData'

# To reset the Visitor count to zero (PUT)

Endpoint: '/resetCountData'
