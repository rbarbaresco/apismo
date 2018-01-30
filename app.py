# -*- coding: utf-8 -*-

from flask import Flask, render_template, jsonify, request
import requests
from server.requester import Requester

app = Flask(__name__, static_folder="static/dist", template_folder="static")

requester = Requester()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/apis")
def apis():
    # if not cache:
    cache = [{
        'host': "http://localhost:5000",
        'api': requests.get("http://localhost:5000/apispec_1.json").json()
    }]
    return jsonify(cache)


@app.route("/makerequest", methods=["POST"])
def make_request():
    return jsonify(requester.request(request.get_json()))


@app.route("/hello")
def hello():
    return "Hello World!!!!!!!!!!!!!!!!!!!!!!!"


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True, threaded=True)
