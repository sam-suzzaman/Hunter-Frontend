## Project Title: `Hunter`

[Live Site](https://hunter-iota.vercel.app/)

### \_ Description:

This is a Job Portal Web Application which is MERN Stack based application. This application has all the functions of managing the user of the application including posting a job, applying for that job and accepting or rejecting the application. Now we will see the function of the complete application part by part.

##### `PART-I: PAGE Details`

-   Homepage
-   All Jobs Page
-   Single Job Page
-   Register Page
-   Login Page
-   Dasbhoard Page
    -   Profile Page
    -   Edit Profile Page
    -   Statistics Page
    -   Add Job Page
    -   Update Job Page
    -   Manage Job Page
    -   Manage Job Application Page
    -   Manage Users Page

##### `Part-II:` USER: This application has three types of users

-   Admin
-   Recruiter
-   User

##### `Part-III: Functionality`

-   Every user can update his own profile.

###### `1. As an Applicant`

-   User must login to visit the application.
-   Those who are Normal User (also known as Applicant) can only apply to Job.
-   From Applicant Dashboard:
    -   Applicant can update his profile.
    -   He can see all the jobs he has applied for from the application tab.

###### `2. As an Recruiter`

-   At first need to login
-   Can't apply to Recruiter Job.
-   Can add new jobs, and manage (CRUD Operations) those jobs (only his/her own posted jobs) and also
-   Can accept or reject the job applications by viewing the resume attached with the application.

###### `3. As an Recruiter`

-   Need to successfully login
-   Can't apply in a job
-   Manage Users (CRUD)
-   Controls the role of a user.
-   Mainly recruiter setting is done by Adin.

<br/>

### \_ Used Technologies:

-   React: used to build UI
-   CSS: for styling components
-   Tailwindcss: also for styling
-   Styled Components: To write css style in unique class name
-   React Query:for data fetching and refetching
-   Axios: for data fetching
-   Dayjs: to show dates in frontend
-   React icons: to show different icons
-   React Router DOM: for frontend routing
-   Recharts: to show graphs and chart
-   React Hook Form: to handle form
-   React Paginate: for pagination
-   React Tag Input: to take tag type inputs
-   Sweet Alert: to show various success and error message
-   React Date Picker: to take data inputs

<br/>

### \_ Challenges:

Here is a brief description of the problems I faced while doing this project and how I solved them.

`1. State Management:`

-   <u>Description:</u> One of the biggest problems here was state management.

-   <u>Solution:</u> I used the Context API to share the same state among the Components that did not have any parent/child relationship. In this way, the problem of state management is no longer there.

`2. API Calling Issues:`

-   <u>Description:</u> Many times the data did not arrive when calling the API.

-   <u>Solution:</u> To solve why the data is not coming, it was necessary to know about the error before, for that I collected proper information from the network tab of the browser and solved the api related problems by using this information.

`3. Job Application:`

-   <u>Description:</u> One of the most difficult tasks of this application was to handle the job application.

-   <u>Solution:</u> For this I have implemented the logic of solving this problem by using chat gpt.
