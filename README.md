What Is This?
=============

I've created the "Pub" - place, where dockers can meet together :)

Technically this is a repository for my custom docker images configurations. Currently it consists of two parts: docker configurations (located under `dockers/` directory) and Node.js based tool called "Assembly Shop" (`assembly-shop/`). 

The last one is designed to simplify maintaining of the Dockerfiles. To achieve that I've designed some kind of DSL (Domain-specific language). For example such JavaScript (ES6) configuration:

```javascript
import {DockerfileBuilder} from '../dockerfile-builders/deb-based/DockerfileBuilder';
    
let builder = new DockerfileBuilder();
    
export default builder
    .install(        
        ['packageA'],
        ['packageB'],
        'add custom PHP repository and some system tools'
    )
    .run('something')
    .runBuilder('apt-get update')
        .andRun('apt-get install -y --no-install-recommends packageC')
        .andRun('apt-get clean -y')
        .andRun('apt-get autoremove -y')
        .andRun('rm -rf /var/lib/apt/lists/*')
    .runBuilderEnd('some funny comment');
```

Will produce:

```dockerfile
# add custom PHP repository and some system tools:
RUN apt-get update \ 
    && apt-get install -y --no-install-recommends packageA \ 
    && apt-get remove -y packageB \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*
    
RUN something
    
# some funny comment:
RUN apt-get update \
    && apt-get install -y --no-install-recommends packageC \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*
```

Why?
---

Since I'm an engineer and a web developer, I added here my own dockerized versions of mine "tools of craft". I plan to write few blog posts to describe how I've organized them.

Personally I prefer not to use specific distributions of Linux (like Alpine) because one of the goal was to create environment similar to used in a real life. I've never seen web services hosted on Alpine-based systems before, since Alpine was initially tailored to solve another class of problems. To avoid extra usage of disk space (one of the reason why people tend to use Alpine with Docker) I've designed more-less effective layers sharing across images. This is what the Docker about in my opinion.

Future plans
------------

It seems that more convenient way of Docker Hub and GitHub integration is to create separate repo per project (or role). It allows to bind triggers on repo updates and avoid headache with manual synchronization between Docker Hub state and GitHub project.

So probably I'll split this repo into smaller parts. Stay tuned.