What Is This?
=============

I've created the "Pub" - place, where dockers can meet together :)

Why?
---

Since I'm an engineer and a web developer, I added here my own Dockerized versions of mine "tools of craft". I plan to write few blog posts to describe how I've organized them. In any case it worth to notice that all of them have been created after long and attentive research.

For example, I've decided not to use specific distros (like Alpine) because one of the goals is to create environment similar to used in a real life. I've never seen web services hosted on Alpine-based systems before. To avoid extra usage of disk space (one of the reasons why people tend to use Alpine with Docker) I've designed more-less effective layers sharing across images. That is what is the Docker about, in my opinion.

Future plans
------------

It seems that more convenient way of Docker Hub and GitHub integration is to create separate repo per project (or role). It allows to bind triggers on repo updates and avoid headache with manual synchronization between Docker Hub state and GitHub project.

So probably I'll split this repo into smaller parts. Stay tuned.