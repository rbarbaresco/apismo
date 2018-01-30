from tests.apismo_case import ApismoCase
from server.utils.request_utils import build_url
from unittest.mock import patch


class TestRequestUtils(ApismoCase):

    def test_should_build_an_empty_path_url(self):
        incoming_request = {'host': 'some_cool_host', 'path': '/'}
        self.assertEquals('some_cool_host/', build_url(incoming_request))

    def test_should_build_an_url_with_a_path(self):
        incoming_request = {'host': 'some_cool_host', 'path': '/some_cool_path'}
        self.assertEquals('some_cool_host/some_cool_path', build_url(incoming_request))

    def test_should_build_an_url_with_a_parameterized_path(self):
        incoming_request = {'host': 'some_cool_host', 'path': '/some_cool_path/{parameter_name}',
                            'parameters': [{'name': 'parameter_name', 'value': 'some_cool_value'}]}
        self.assertEquals('some_cool_host/some_cool_path/some_cool_value', build_url(incoming_request))

    def test_should_build_an_url_with_a_double_parameterized_path(self):
        incoming_request = {'host': 'some_cool_host', 'path': '/some_cool_path/{parameter_1}/{parameter_2}',
                            'parameters': [
                                {'name': 'parameter_1', 'value': 'value_1'},
                                {'name': 'parameter_2', 'value': 'value_2'}]}
        self.assertEquals('some_cool_host/value_1/value_2', build_url(incoming_request))
