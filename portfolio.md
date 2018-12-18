---
layout: default
title: Portfolio
description: Change we to stackit

android_projects:
    -
        name: Alerta Mujer
        link: https://play.google.com/store/apps/details?id=iqm.iqmapp
    -
        name: Visita Segura
        link: https://play.google.com/store/apps/details?id=mx.com.smartnova.visitasegurareader
    -
        name: Colono Seguro
        link: https://play.google.com/store/apps/details?id=mx.com.smartnova.forms.colonoseguro
    -
        name: Weepec
        link: https://play.google.com/store/apps/details?id=com.weepec.appWeepec
    -
        name: Weepec Cuidadogs
        link: https://play.google.com/store/apps/details?id=com.weepec.appCuidadogs

ios_projects:
    -
        name: It’s Borrowed
        link: ""
    -
        name: UPIN
        link: ""
    -
        name: Fuelzee
        link: https://itunes.apple.com/us/app/fuelzee-pay-less-for-gas/id660938854?mt=8
    -
        name: Youse
        link: https://itunes.apple.com/us/app/youse-seguro-tipo-vc/id1371689994?mt=8
    -
        name: Dr.Luke
        link: https://itunes.apple.com/us/app/dr-luke-saúde-do-bebê/id1375557280?mt=8
    -
        name: Buscape
        link: https://itunes.apple.com/us/app/buscapé-ofertas-e-descontos/id296987450?mt=8
    -
        name: Weepec
        link: https://itunes.apple.com/mx/app/weepec/id1359921842?mt=8
    -
        name: Weepec Cuidadogs
        link: https://itunes.apple.com/mx/app/weepec-cuidadogs/id1361479455
    -
        name: Colono Seguro
        link: https://itunes.apple.com/us/app/colono-seguro/id1151190382?l=es&ls=1&mt=8
    -
        name: Visita Segura
        link: https://itunes.apple.com/us/app/visita-segura/id1227930921?l=es&mt=8

clients:
    - images/clients/pic01.png
    - images/clients/pic02.png
    - images/clients/pic03.png
    - images/clients/pic04.png
    - images/clients/pic05.png
    - images/clients/pic06.png
    - images/clients/pic07.png
    - images/clients/pic08.png
    - images/clients/pic09.png
    - images/clients/pic10.png
    - images/clients/pic11.png
    - images/clients/pic12.png
    - images/clients/pic13.png
    - images/clients/pic14.png
    - images/clients/pic15.png
    - images/clients/pic16.png

---

<header>
    <h2>{{ page.title }}</h2>
    <p>{{ page.description }}</p>
</header>

We are a dedicated team of engineers who are passionate about the work we do. Our expertise encompases modern web application and mobile development for both customer facing and internal business applications.
We have the expertise to deliver B2B solutions for custom inner office needs.

We have done B2C public facing e-commerce applications.

We’ve been very involved with the startup communities and in helping them turn their ideas into reality.

We’ve worked with corporate IT departments to help them solve unique problems, automate and streamline business processes.


## What we do


| **Web Application Development** | **Native & Hybrid Mobile Development** | **Back Office** |
eCommerce, SaaS, UI/UX Design, Responsive Web, Internal Tools |  Social Networks, |  Systems Integration, Databases, Data Processing, Maintenance, IT Supplement


## Past Project Highlights
---

### Supply Chain Alert System
**SaaS, API integration, Data Mining**

| **Description** | **Deliverables** |
| Scanned multiple sources to gain insight into to supply chain companies for used for alerting of potential issues. | SaaS product, database, <br /><img width="160" /> |


### Social Network mobile application

| **Description** | **Deliverables** |
| Stack I.T. was approached by the UPIN team to help them build an exciting new mobile application platform for getting users together with near and spontaneous events happening at the moment.<br /><br />The key challenge for this project was to create a minimum viable product with the added complexity of a constantly changing set of requirements. | UI/UX Design, Native iOS Mobile App, Backend REST API Server <br /><img width="160" /> |


### Supply Chain Management Platform
**SaaS, UI / UX Design, Responsive Web, Data Science, Data Management**

| **Description** | **Deliverables** |
| Source Intelligence. Used for various features which includes tracking of components source. Discovery bla bla. Supply Chain Alert Systems - SourceIntelligence | PHP, Symfony, Angular, Javascript, MySql, Neo4J, Java, Hibernate <br /><img width="160" /> |

### Cloud bases Continuous Deployment
**Cloud Continuous Deployment, Support**

| **Description** | **Deliverables** |
| To support one of Siemens keystone applications bla bla bla. Work in partnership with the development team to create a seamless and streamlined deployment process. Along with a mechanism to manage the scaling of the main server. We took care of everything including the server setup, security, working closely with Microsoft’s Azure cloud platform. Bla bla bla. The applied solution allowed us to maintain the consistency of the structure and to make website navigation easier. | Internal Web Application |

### Conversion through Landing Page

| **Description** | **Deliverables** |
| For the leading Polish consulting and project company - Greenhat - we have prepared the so-called Landing Page, the first page that visitors get to as a result of marketing activities. The project prepared by us aimed to acquire contacts for users interested in the service and subsidy. Our task was to prepare a simple, readable contact form, which allows obtaining contact details from various users. The part of the project was also the Call Page service, which enables a quick and direct connection between a potential customer and people leading the campaign. The Landing Page project prepared by our Digital Agency was embedded in a subdomain specified by the client. |

### Bla Bla

| **Description** | **Deliverables** |
| Warbird Consulting Partners is a company comprised of 3 business areas: tech advisory, healthcare, and government. Bop Design created a new B2B website that immediately channels visitors to the appropriate business area on the homepage. The end result is a cohesive B2B brand platform that highlights the firm’s expertise in developing financial, operational, and technological solutions for their clients. |


## List of projects
---

| **iOS** | **Android** |
| {%- for project in page.ios_projects %} <a href="{{ project.link }}" target="_blank">{{ project.name }}</a><br /> {%- endfor %} | {%- for project in page.android_projects %} <a href="{{ project.link }}" target="_blank">{{ project.name }}</a><br /> {%- endfor %} |

## Companies We’ve Worked With

<section class="box special clients">
	<div class="clients-row">

        {% for logo in page.clients %}
        <section>
			<img src="{{ logo }}" alt="">
		</section>
        {% endfor %}

	</div>
</section>
