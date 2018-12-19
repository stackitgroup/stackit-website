---
layout: default
title: Portfolio

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

Stack I.T. is a dedicated team of engineers driven by our love of coding and in helping to turn great ideas into a reality. Our expertise encompases modern web application and mobile application development for both customer facing and back office business needs. We take pride in working closely with the startup community and in helping in any way we can. The journeys we’ve taken along with our partners has provided us invaluable insights into Product Development. Above delivering our best engineering work, we’re committed to making available to you all those insights and lessons learned.

## What we do

| **Mobile Application Development** | Our mobile application developers have the expertise to help entrepreneurs create applications ranging from Social Network to Online Marketplace Applications. |
| **Web Application Development** | Leveraging the latest in web technologies, our agile team brings startup and enterprise ideas to life. |
| **Back Office Software Development** | Let our team help you streamline your work by automating your back office. |
| **IT Support** | Rely of Stack I.T. to provide fast, thorough and professional support for all your application and office needs. |

## Past Project Highlights

### Supply Chain Alert System

| **Description** | **Deliverables** |
| Supply chain management plays a vital role in ensuring companies are able to sustain continuous and quality services. When a supplier several levels up the supply chain is not able to provide their services this could have severe consequences for the customer. A platform was designed with this challenge in mind. In a nutshell data is mined via hundreds of publicly available sources, analysed and using custom designed algorithms we are able to forecast  potential problems and alert our customers. | SaaS product, API integration, Web Data Extraction, Data Mining Algorithms, Data Collection. |


### Social Network mobile application

| **Description** | **Deliverables** |
| Stack I.T. was approached by the UPIN team to help them build an exciting new mobile application platform for getting users together with near and spontaneous events happening at the moment. The key challenge for this project was to create a minimum viable product with the added complexity of a constantly changing set of requirements. | UI/UX Design, Native iOS Mobile App, Backend REST API Server. |

### Cloud based Continuous Deployment

| **Description** | **Deliverables** |
| To support one of Siemens new keystone cloud platforms and in partnership with their development team a seamless and streamlined automated deployment process was developed. Along with a mechanism to manage application and database server scaling, our Continuous Deployment system handled all of the complicated steps from a well designed and simple web-interface. | Back Office Web Application, Integration of software development tools. |

## List of projects

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
