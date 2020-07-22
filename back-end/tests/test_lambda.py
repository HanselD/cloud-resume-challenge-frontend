import json
import pytest

from code import app


def test_lambda_handler(event,mocker):
    count = app.lambda_handler('test','tester')
    assert count == 0