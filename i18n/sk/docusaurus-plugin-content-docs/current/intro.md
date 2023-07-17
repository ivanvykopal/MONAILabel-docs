---
sidebar_position: 1
---

# Úvod

## Začíname

**MONAILabel Server** predstavuje významný pokrok v oblasti analýzy medicínskych obrazov, nielenže rozširuje možnosti platformy **MONAILabel**, ale aj sa bezproblémovo integruje s významným softvérom pre analýzu obrazov **QuPath**. Táto rozšírená verzia teraz poskytuje výskumníkom a odborníkom v medicíne komplexné riešenie pre presnú a automatizovanú segmentáciu kritických štruktúr, vrátane **ciev**, **zápalových oblastí** a **endokardu** v dátach z WSI snímkov získaných po biopsii srdca, ofarbených H&E alebo SRel farbením. Kombináciou MONAILabel a QuPath môžu používatelia využívať moderné modely umelej inteligencie na zefektívnenie svojho pracovného postupu analýzy, urýchliť detekciu odmietnutia transplantátu srdca a získať ďalšie poznatky v oblasti digitálnej patológie.

### Čo budete potrebovať

Pre efektívne využitie MONAILabel Server budete potrebovať nasledujúce požiadavky:

- nainštalovaný **Python** alebo **Docker**,

- **Cuda Toolkit** minimálne verzie v11.2,

- **QuPath** minimálnej verzie v0.4.0,

- **GPU with CUDA support** (Táto požiadavka nie je podporovaná na počítačoch s operačným systémom macOS).

### Minimálne požiadavky

Minimálne požiadavky na hardware:

- 8GB CPU RAM

- Grafická karta podporujúca Cuda - [zoznam](https://developer.nvidia.com/cuda-gpus)

- Grafická karta minimálne s 2GB pamäte

## MONAILabel Server

**MONAILabel Server** je projekt, ktorý vznikol na základe diplomovej práce Ivana Vykopala na Fakulte informatiky a informačných technológií (FIIT) Slovenskej technickej univerzity (STU) a bakalárskej práce Tomáša Matejova. Server má konkrétny účel - pomáhať pri identifikácii odmietnutia srdcového aloštepu. Okrem toho, tento projekt bol realizovaný v úzkej spolupráci medzi odborníkmi z Inštitútu klinickej a experimentálnej medicíny (IKEM) a študentmi a výskumníkmi z FIIT STU. Tento projekt bol implementovaný na základe existujúceho projektu od **MONAI** a konkrétne **MONAILabel**.
