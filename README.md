# factored_datathon_2023_shoop_hadoop
## Amazon Reviews Data Analysis

This repository contains code and resources for a data science project focused on analyzing Amazon reviews. The goal of this project is to gain insights from the reviews dataset using Databricks as the primary analysis platform.

## Table of Contents

- [Introduction](#introduction)
- [Data Description](#data-description)
- [Setup and Dependencies](#setup-and-dependencies)
- [Contact](#contact)

## Introduction

In this datathon project, we aim to analyze a large dataset of Amazon reviews to extract valuable insights. Our analysis will focus on various aspects, such as ...

## Data Description

The dataset used for this project comprises Amazon product reviews across different categories. There are two main schemas for data sources reviews and metadata both come in json format. The reviews data cames from two sources, batch and streaming. in the `data/` directory we provide some logic to access this sources

## Setup and Dependencies

- Given that we are using a DataBricks community account for this datathon there are some limitations, one of which is that github integration is not enabled. For this reason there are some workarounds to consume our repo i.e. runnning this cell in a notebook:
```
%sh
rm -rf test_spark
git clone https://github.com/flakoash/test_spark
``` 
- we also provide the notebooks in .dbc format in the `notebooks/databricks/` directory


## Contact

If you have any questions or suggestions, feel free to contact us at [rojas.f.adrian@gmail.com] or via GitHub issues.
