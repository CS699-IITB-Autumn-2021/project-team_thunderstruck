import requests
from bs4 import BeautifulSoup
# !pip install chart_studio

import os
import numpy as np
import matplotlib.pyplot as plt
import re
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

# Reference : https://docs.python-requests.org/en/latest/
URL  = "https://www.mygov.in/covid-19"

response = requests.get(URL).content

# Reference : https://www.crummy.com/software/BeautifulSoup/bs4/doc/
soup_india = BeautifulSoup(response, 'html.parser')

states = soup_india.find_all("span", {"class": "st_name"})
states = [str(x.string) for x in states]
#print(states)


states_total_cases = soup_india.find_all("div", {"class": "tick-confirmed"})
states_total_cases = [int(x.small.string.replace(",","")) for x in states_total_cases]
##print(states_total_cases)

states_active_cases = soup_india.find_all("div", {"class": "tick-active"})
states_active_cases = [int(x.small.string.replace(",","")) for x in states_active_cases]
#print(states_active_cases)

states_discharged = soup_india.find_all("div", {"class": "tick-discharged"})
states_discharged = [int(x.small.string.replace(",","")) for x in states_discharged]
#print(states_discharged)

states_deaths = soup_india.find_all("div", {"class": "tick-death"})
states_deaths = [int(x.small.string.replace(",","")) for x in states_deaths]
#print(states_deaths)

# Reference https://www.geeksforgeeks.org/create-a-pandas-dataframe-from-lists/
india_data_df = pd.DataFrame(list(zip(states, states_total_cases, states_active_cases, states_discharged, states_deaths)),columns =['Name', 'Total Cases', 'Active Cases','Total discharged','Total Deaths',])


# display(india_data_df)

url = 'https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/'

# get URL html
page = requests.get(url)
soup_int = BeautifulSoup(page.text, 'html.parser')
input_data = soup_int.find_all('td')
country=[]
country_confirmed=[]
country_deaths=[]

for iter1 in range(len(input_data)):
    if iter1%4==0:
        country.append(str(input_data[iter1].string))
    if iter1%4==1:
        country_confirmed.append(int(input_data[iter1].string.replace(",","")))
    if iter1%4==2:
        country_deaths.append(int(input_data[iter1].string.replace(",","")))
    if iter1%4==3:
        continue
country_data_df = pd.DataFrame(list(zip(country, country_confirmed, country_deaths)),columns =['Name', 'Confirmed Cases',"Deaths"])
# print(country)
# print(country_confirmed)
# print(country_deaths)

# display(country_data_df)


# Reference https://plotly.com/python/bar-charts/
# Reference https://plotly.com/python/pie-charts/
# Reference https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html
# Reference https://plotly.com/python/bar-charts/

fig1=px.pie(country_data_df.sort_values(by=['Confirmed Cases'],ascending=False)[:20], values="Confirmed Cases", names="Name", title="Confirmed cases of top 20 countries")

fig2=px.pie(country_data_df.sort_values(by=['Deaths'],ascending=False)[:20], values="Deaths", names="Name", title="Covid deaths of top 20 countries")

fig3=px.bar(india_data_df.sort_values(by=['Total Cases'],ascending=False), x="Name", y="Total Cases",color='Total Deaths', title="State-wise total cases and total deaths")

fig4=px.bar(india_data_df.sort_values(by=['Active Cases'],ascending=False), x="Name", y="Active Cases",title="State-wise Active cases")


# Reference https://plotly.com/python/getting-started-with-chart-studio/

import chart_studio
username= 'Param_iitb'
api_key= 'jNontKOQXWe6D988kwcz'

chart_studio.tools.set_credentials_file(username=username,api_key=api_key)

import chart_studio.plotly as py


py.plot(fig1, filename= 'country_cases',auto_open=False)

py.plot(fig2, filename= 'country_deaths',auto_open=False)

py.plot(fig3, filename= 'india_cases',auto_open=False)

py.plot(fig4, filename= 'india_deaths',auto_open=False)

# Rederence https://www.geeksforgeeks.org/writing-data-from-a-python-list-to-csv-row-wise/
import csv
# print(country_data_df.sum())
# print(india_data_df.sum())
csv_data = [["National Total Active Cases", list(india_data_df.sum())[2]], ["National Total Deaths", list(india_data_df.sum())[4]] , ["Global Total Confirmed Cases", list(country_data_df.sum())[1]] , ["National Global Deaths", list(country_data_df.sum())[2]]]

with open('cards_data.csv', 'w') as f:
    write = csv.writer(f)
    write.writerows(csv_data)