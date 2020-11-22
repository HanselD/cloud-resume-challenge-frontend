# Cloud Resume Challenge Frontend

---

## Overview

This project was a result of a challenge introduced by AWS Serverless Hero, Forrest Brazeal. The challenge was to use the AWS cloud to host your resume online. See details [here](https://cloudresumechallenge.dev/)

It was built with HTML and CSS (Bulma framework). The visitor count function is written in JavaScript and increments the count of visitors stored in a DynamoDB table. For backend code, visit [Cloud Resume Backend](https://github.com/HanselD/cloud-resume-challenge-backend)

A Github Actions pipeline tracks changes in the repo and pushes them to the S3 bucket. It also invalidates the Cloudfront cache to ensure the viewer is served the latest version always.

---

## Architecture

![Architecture](/Cloud-Resume-Frontend.png)


### Details

Static assets (HTML, CSS, JS) are stored in an S3 bucket. This bucket is fronted by a Cldoufront distribution that has an origin access policy which allows any user to only access the bucket through the distribution.
DNS is set up using Route 53 where an A record has been set up to point to the distribution domain name

---

TODO
- [x] Certification
- [x] HTML
- [x] CSS
- [x] Static S3 Website
- [x] HTTPS
- [x] DNS
- [x] JavaScript
- [x] DynamoDB
- [x] APIGW
- [x] Python
- [x] Tests
- [x] IaC
- [x] Source Control
- [x] CI/CD - FrontEnd
- [x] CI/CD - Backend
- [x] Blog post

