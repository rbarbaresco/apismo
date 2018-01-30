# -*- coding: utf-8 -*-
import re



def build_url(incoming_request_as_json):

    parameters = {}
    for parameter in incoming_request_as_json.get('parameters', []):
        parameters[parameter['name']] = parameter

    raw_path = incoming_request_as_json['path']
    path = raw_path

    path_parameters = re.findall('{(.*)}*', raw_path)
    if path_parameters:
        for path_parameter in path_parameters:
            path = path.replace('{' + '{}'.format(path_parameter) + '}', parameters[path_parameter]['value'])
    return incoming_request_as_json['host'] + path
