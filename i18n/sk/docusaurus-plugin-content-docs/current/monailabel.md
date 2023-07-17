---
sidebar_position: 2
---

# MONAILabel

Oficiálna Dokumentácia: <https://docs.monai.io/projects/label/en/latest/>

_Vedúca platforma s otvoreným zdrojovým kódom pre anotovanie medicínskych dát s využitím umelej inteligencie_

MONAI Label je inteligentný nástroj na anotovanie obrázkov a učenie s otvoreným zdrojovým kódom, ktorý umožňuje používateľom vytvárať anotované dátasety a vytvárať modely umelej inteligencie pre klinické hodnotenie. MONAI Label umožňuje vývojárom aplikácií vytvárať anotačné aplikácie vo forme serverless riešenia, kde vlastné anotačné aplikácie sú poskytované ako služba prostredníctvom MONAI Label Server.

## Ukážkové aplikácie v MONAILabel

### Radiológia

Táto aplikácia obsahuje príkladové modely pre interaktívnu aj automatizovanú segmentáciu rádiologických (3D) obrazov. Zahrňuje aj automatickú segmentáciu najnovšími modelmi hlbokého učenia (napr. UNet, UNETR) pre viacero orgánov v oblasti brucha. Interaktívne nástroje zahŕňajú DeepEdit a Deepgrow na aktívne vylepšovanie natrénovaných modelov a ich nasadenie.

### Pathology

Táto aplikácia obsahuje príkladové modely pre interaktívnu aj automatizovanú segmentáciu patologických (WSI) snímkov. Zahrňuje segmentáciu jadier pre viacero typov buniek: neoplastických, zápalových, spojivového tkaniva, mŕtvych buniek a epitelových buniek. Aplikácia poskytuje interaktívne nástroje, vrátane DeepEdits pre interaktívnu segmentáciu jadier.

### Bundle

Bundle aplikácia umožňuje používateľom prispôsobené modely pre inferenciu, trénovanie alebo predspracovanie a postspracovanie akýchkoľvek cieľových anatomických štruktúr. Špecifikácia pre integrovanie Bundle aplikácie do MONAILabel odkazuje na archivovaný Model-Zoo pre prispôsobené anotovanie (napr. model tretích strán pre označovanie obličkovej kôry, dreňa a panvovej čašky. Interaktívne nástroje, ako sú DeepEdits).

### Endoskopická aplikácia

Endoskopická aplikácia umožňuje používateľom používať interaktívne aj automatizované modely segmentácie a klasifikácie nad 2D obrazmi pre endoskopické prípady. Spolu s nástrojom CVAT demonštruje plne automatizovaný pracovný postup aktívneho učenia na trénovanie a jemné ladenie modelu.
