import React from 'react'
import BannerGeneral from "../../img/banner-general.png";
import Sanlorenzo from "../../img/sanlorenzo.png";
import Remera from "../../img/remera1.jpg";
import Pantalon from "../../img/pantalon1.png"
import "./estilos/home.css"

import CardDescuento from '../estructura/CardDescuento';

function Home() {
    return (
        <div>
            <div>
                <img src={BannerGeneral} width={"100%"} height={"300"} alt="banner" />
            </div>
            <br />
            <h1 className='text-center'>Ofertas</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Remera} nombre={"Remera Mars"} precioOriginal={"$20.000"} precioDescuento={"$15.000"} />
                <CardDescuento imagen={Pantalon} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
            </div>
            <hr />
            <h1 className='text-center'>Remeras más vendidas</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />

            </div>
            <hr />
            <h1 className='text-center'>Pantalones más vendidos</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
            </div>
            <hr />
            <h1 className='text-center'>Buzos más vendidos</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
            </div>
            <hr />
            <h1 className='text-center'>Zapatillas más vendidas</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
            </div>
        </div>
    )
}

export default Home;