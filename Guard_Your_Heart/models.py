from Guard_Your_Heart import db
from datetime import datetime

class Assessment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.Integer, nullable=False)
    height = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    ap_hi = db.Column(db.Integer, nullable=False)
    ap_lo = db.Column(db.Integer, nullable=False)
    cholestrol = db.Column(db.Integer, nullable=False)
    gluc = db.Column(db.Integer, nullable=False)
    smoke = db.Column(db.Integer, nullable=False)
    alco = db.Column(db.Integer, nullable=False)
    active = db.Column(db.Integer, nullable=False)
    bmi = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return '<%r>' % self.id

    def addData(test):
        # db.session.add(test)
        # db.session.commit()
        return 'done'