from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__, static_folder="static/dist", template_folder="static")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/apis")
def apis():
    response = [{
        'host': "http://localhost:5000",
        'api': requests.get("http://localhost:5000/apispec_1.json").json()
    }]
    return jsonify(response)


@app.route("/hello")
def hello():
    return "Hello World!!!!!!!!!!!!!!!!!!!!!!!"


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True, threaded=True)
