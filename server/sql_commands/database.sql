CREATE DATABASE coviddash;

DROP TABLE IF EXISTS admin CASCADE;
DROP TABLE IF EXISTS patient CASCADE;
DROP TABLE IF EXISTS location CASCADE;
DROP TABLE IF EXISTS hotspots CASCADE;

CREATE TABLE admin(
  admin_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE patient(
  patient_id SERIAL PRIMARY KEY,
  isPositive BOOLEAN,
  name VARCHAR(255),
  email VARCHAR(255),
  positive_date TIMESTAMPTZ,
  negative_date TIMESTAMPTZ
);

CREATE TABLE location(
  location_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  lat VARCHAR(255),
  lon VARCHAR(255)
);

CREATE TABLE hotspots(
    location_id INT,
    patient_id INT,
    PRIMARY KEY(location_id, patient_id),
    CONSTRAINT fk_patient
        FOREIGN KEY(patient_id) 
        REFERENCES patient(patient_id),
    CONSTRAINT fk_location
      FOREIGN KEY(location_id) 
	  REFERENCES location(location_id)
);