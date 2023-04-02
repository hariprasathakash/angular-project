from flask import Flask, request
import pickle as pkl
import pandas as pd
import statsmodels.api as sm
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app, support_credentials=True)


@app.get('/home-page')
def welcome():
    
    print("came inside")

    return {"m":"working"}