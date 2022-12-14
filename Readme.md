### MVP for Factored

#### Overview

Create a full-stack app that uses React for the frontend and Django REST API for the backend. 

#### Frontend spec

- Users need to have the ability to create an account using email and password
- Users need to have the ability to reset their password using the online form
- Register and login pages are public, all other pages require authentication
- Users need to accept Ts&Cs and Privacy Policy before creating an account
- When logged in, the user has to go through KYC in order to create their first Advance
- Integrate with Persona's API for KYC
- Once KYC'd, they can create their Advance - the flow will include 4 screens:
    - Property address and monthly rent details
    - Document upload for lease agreement, tenant vetting and rent protection
    - Advance finance details - amount of £ required, term and other info
    - Bank account details - name, sort code and account number
- Logged in dashboard needs to display a table with user's advances
- User should be able to view their profile e.g. name, email, address

#### Backend spec

- Use Django admin panel for user and advance management
    - Each user needs to have a comment box
    - Each advance needs to show the uploaded documents
    - Each advance needs to have a comment box (?)
    - Admin can change the status of each advance
- Use DRF for the REST API 
- Use Postgres for the DB
- Implement unit tests for the users and advances
- Advance will have 5 statuses:
    - Incomplete
    - Pending approval
    - Active
    - In arrears
    - Repaid
- User's KYC status has to be updated based on their Persona flow outcome
- Email notification
    - Send the user an email when they sign up
    - Send the user an email when they request to reset password
    - Send the user an email when their advance has been created
    - Send the user an email when the status of their advance changes (?)
    - Send admin an email when an advance is created
- Controls
    - Cannot make authenticated API requests to view other users
    - Cannot make authenticated API requests to view other advances
    - Cannot change the user or advance ID
- Add support for image upload for each advance(?)


#### DevOps 

- Host the app on AWS
- Configure the DNS so that the app is hosted on "app.example.com"
- Use Docker (?)
