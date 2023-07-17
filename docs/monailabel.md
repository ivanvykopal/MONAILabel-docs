---
sidebar_position: 2
---

# MONAILabel

Official Documentation: <https://docs.monai.io/projects/label/en/latest/>

_The Leading Open Platform for Medical Data Labeling with AI_

MONAI Label is an intelligent open source image labeling and learning tool that enables users to create annotated datasets and build AI annotation models for clinical evaluation. MONAI Label enables application developers to build labeling apps in a serverless way, where custom labeling apps are exposed as a service through the MONAI Label Server.

## Sample Apps in MONAILabel

### Radiology

This app has example models to do both interactive and automated segmentation over radiology (3D) images. Including auto segmentation with latest deep learning models (e.g., UNet, UNETR) for multiple abdominal organs. Interactive tools includes DeepEdit and Deepgrow for actively improve trained models and deployment.

### Pathology

This app has example models to do both interactive and automated segmentation over pathology (WSI) images. Including nuclei multi-label segmentation for Neoplastic cells, Inflammatory, Connective/Soft tissue cells, Dead Cells, and Epithelial. The app provides interactive tools includes DeepEdits for interactive nuclei segmentation.

### Bundle

The Bundle app enables users with customized models for inference, training or pre and post processing any target anatomies. The specification for MONAILabel integration of the Bundle app links archived Model-Zoo for customized labeling (e.g., the third-party transformer model for labeling renal cortex, medulla, and pelvicalyceal system. Interactive tools such as DeepEdits).

### Endoscopy App

The Endoscopy app enables users to use interactive, automated segmentation and classification models over 2D images for endoscopy usecase. Combined with CVAT, it will demonstrate the fully automated Active Learning workflow to train + fine-tune a model.
