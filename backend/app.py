from flask import *
import json
from custom_exception import *

# Initilize the Flask App
app = Flask(__name__)
app.secret_key = 'ThWmYq3t6w9z$C&F)J@NcRfUjXn2r4u7'

# Create API endpoint for get & post
@app.route('/', methods=['GET','POST'])
def get_string():
    if request.method == 'POST':
        data = request.get_json()
        try:
            if len(data) == 1 and ('sudoku_str' in data.keys()):
                try:
                    if len(data['sudoku_str']) == 89 and len(data['sudoku_str'].split(",")) == 9:
                        sudoku_arr = data['sudoku_str'].split(",")
                        print(sudoku_arr)
                        return jsonify({'msg' : 'Successfully Post'})
                    else:
                        raise InvalidInputLength
                except InvalidInputLength:
                    return jsonify({'msg': 'Invalid Input Length'})
            else:
                raise InvalidPostRequest
        except InvalidPostRequest:
            return jsonify({'msg': 'Invalid Post Request'})
    elif request.method == 'GET':
        pass

# Run the Flask App
if __name__ == '__main__':
    app.run(debug=True)