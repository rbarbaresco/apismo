from tests.apismo_case import ApismoCase
from server.requester import Requester
from unittest.mock import patch


class TestRequester(ApismoCase):

    def setUpTest(self):
        self.requester = Requester()

    @patch('requests.post')
    def test_should_call_post_method_with_url(self, post):
        request = self.default_request('post')
        self.requester.request(request)
        post.assert_called_once_with(request['host'])

    @patch('requests.get')
    def test_should_call_get_method_with_url(self, get):
        request = self.default_request('get')
        self.requester.request(request)
        get.assert_called_once_with(request['host'])

