import React from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

const api = axios.create({
    baseURL:"https://sujeitoprogramador.com/"
})

export default api;