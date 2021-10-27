import json
import numpy as np
import pandas as pd
#https://www.youtube.com/watch?v=kxPZV9ileKI&t=478s
import chart_studio

import chart_studio.plotly as py

import chart_studio.tools as tls

import plotly.express as px
# https://geojson.io/#map=15/19.1288/72.9090
campus_zones = json.load(open("iitb_map.geojson", "r"))

# https://plotly.com/python/map-configuration/
name_code_map = {}
for feature in campus_zones["features"]:
    feature["id"] = feature["properties"]["area_code"]
    name_code_map[feature["properties"]["name"]] = feature["id"]

df = pd.read_csv("campus_covid_data.csv")
df["id"] = df["name"].apply(lambda x: name_code_map[x])

username= 'Param_iitb'
api_key= 'jNontKOQXWe6D988kwcz'

chart_studio.tools.set_credentials_file(username=username,api_key=api_key)

fig = px.choropleth_mapbox(
    df,
    locations="id",
    geojson=campus_zones,
    color="cases",
    hover_name="name",
    hover_data=["cases"],
    title="IIT BOMBAY CAMPUS COVID CASES",
    mapbox_style="open-street-map",
    center={"lat": 19.132, "lon": 72.9133},
    zoom=13.9,
    opacity=0.5,
    #color_continuous_scale=px.colors.diverging.BrBG,
    #color_continuous_midpoint=5,
)

py.plot(fig, filename= 'project_heat_map',auto_open=False)