import json
import pytest

from code import getcount


def test_lambda_handler(event,mocker):
    count = getcount.lambda_handler('test','tester')
    assert count == 0