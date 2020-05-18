from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta
import pandas as pd

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
app.secret_key = "melbouricks"
app.permanent_session_lifetime = timedelta(minutes=120)
df = pd.read_csv('food.csv')

from Guard_Your_Heart import routes