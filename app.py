from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
import pickle as pkl
import pandas as pd
import statsmodels.api as sm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'supersecretkey'

class UploadFileForm(FlaskForm):
    file = FileField("File")
    submit = SubmitField("Upload File")

@app.route('/', methods=['GET',"POST"])
@app.route('/home-page', methods=['GET',"POST"])
def home():
    form = UploadFileForm()
    return render_template('home_page.component.html', form=form)
@app.route('/predict', methods=["POST"])
def predict():
    model = sm.tsa.arima.ARIMA(df[:365]['sales'], order=(1,1,2))
    result = model.fit()
    return list(result.forecast(5))


if __name__ == '__main__':
{}