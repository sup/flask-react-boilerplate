from app import app, db
from flask import jsonify
from models import Todo


@app.route('/api/', methods=['GET'])
def hello_world():
    return jsonify({'hello': 'world'})


@app.route('/api/todo', methods=['GET', 'POST'])
def get_todos():
    todos = Todo.query.all()  
    return jsonify([todo.as_dict() for todo in todos])


if __name__ == '__main__':
    app.run(debug=True)
