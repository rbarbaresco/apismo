# -*- coding: utf-8 -*-
import requests
import re


class Requester:

    def request(self, incoming_request_as_json):

        methods = {
            'get': self._make_get,
            'post': self._make_post
        }

        methods[incoming_request_as_json['method'].lower()](incoming_request_as_json)
        print(incoming_request_as_json)
        return incoming_request_as_json

    def _make_post(self, incoming_request_as_json):
        requests.post(build_url(incoming_request_as_json))

    def _make_get(self, incoming_request_as_json):
        requests.get(build_url(incoming_request_as_json))


def build_url(incoming_request_as_json):
    url = incoming_request_as_json['host']
    return url