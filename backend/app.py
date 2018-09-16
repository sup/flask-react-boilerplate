from flask import Flask
from flask import jsonify


app = Flask(__name__)


@app.route('/api/', methods=['GET'])
def hello_world():
    return jsonify({'hello': 'world'})


if __name__ == '__main__':
    app.run(debug=True)