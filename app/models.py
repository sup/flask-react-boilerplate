from app import db

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(80), nullable = False)
    description = db.Column(db.Text)
    complete = db.Column(db.Boolean)

    def __init__(self, title, description, complete=False):
        self.title = title
        self.description = description
        self.complete = complete

    def __repr__(self):
        return '<Todo %r>' % self.title

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
