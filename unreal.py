from flask import Flask, render_template
from flask_jsglue import JSGlue


app = Flask(__name__)
jsglue = JSGlue(app)

@app.route("/")
def home():
    return render_template("home.html", title="unreal")

if __name__ == "__main__":
    app.run(debug=True)