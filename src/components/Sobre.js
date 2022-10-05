import React from 'react'
import Layout from '../layout'
import Card from './Card'

export default function Sobre() {
  return (
    <Layout>
        <Card title="Cajuzão" info="
            Bem-vindo ao Cajuzão! Aqui temos comida de montão!
        "/>
        <Card title="Clientes" info="
            Todo cliente é bem-vindo e deve ser respeitado.
        "/>
        <Card title="Ofertas?" info="
            Sim, nós temos ofertas, acesse a aba ofertas localizada na parte superior do site.
        "/>
    </Layout>
  )
}
