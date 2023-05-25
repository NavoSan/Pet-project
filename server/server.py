from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# ...

# Configuración del servidor de correo electrónico
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SMTP_USERNAME = 'santiagonavalesp@gmail.com'
SMTP_PASSWORD = 'lybuqnqlmdaubkkg'
SENDER_EMAIL = 'santiagonavalesp@gmail.com'


#Configuracion del server para conectarse a MySQL
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'  # Cambia 'localhost' por la dirección de tu servidor MySQL
app.config['MYSQL_USER'] = 'user'  # Cambia 'tu_usuario' por tu usuario de MySQL
app.config['MYSQL_PASSWORD'] = 'password'  # Cambia 'tu_contraseña' por tu contraseña de MySQL
app.config['MYSQL_DB'] = 'contacts'  # Cambia 'tu_basedatos' por el nombre de tu base de datos

mysql = MySQL(app)

@app.route('/')
def exmp():
    return "Holas"

@app.route('/contact', methods=['POST'])
def send_contact_email():
    name = request.json['name']
    email = request.json['email']
    message = request.json['message']

    # Configurar el mensaje de correo electrónico
    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = SENDER_EMAIL 
    msg['Subject'] = f'Nuevo mensaje de contacto de {name}'

    body = f'Nombre: {name}\n'
    body += f'Correo electrónico: {email}\n'
    body += f'Mensaje:\n{message}'

    msg.attach(MIMEText(body, 'plain'))

    # Envío del correo electrónico
    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
            return jsonify({'message': 'Correo enviado exitosamente'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def save_contact_email():
    name = request.json['name']
    email = request.json['email']
    message = request.json['message']
    
    #Aqui se conecta a la base de MySQL y se envia el query para agregar los datos a la tabla
    cur = mysql.connection.cursor()
    cur.execute('INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)',
                (name, email, message))
    mysql.connection.commit()
    
    return "Enviado"


if __name__ == '__main__':
    app.run(
        port = 5000, 
        debug = True)
