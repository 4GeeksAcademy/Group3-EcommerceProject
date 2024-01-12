import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useContext, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { render, screen } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CallToAction from './CallToAction';

const CallToAction = () => {
  return (
    <div>{component_name}</div>
  );
};

export default CallToAction;
