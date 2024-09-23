import React from 'react'
import BannerBuzos from "../../img/banner-buzos.png";
import Sanlorenzo from "../../img/sanlorenzo.png";
import CardDescuento from '../estructura/CardDescuento';
import "./estilos/home.css"

function BuzosCat() {
    return (
        <div>
            <div>
                <img src={BannerBuzos} width={"100%"} height={"300"} alt="banner" />
            </div>
            <h1 className='text-center'>Buzos</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera Mars"} precioOriginal={"$20.000"} precioDescuento={"$15.000"} />
                <CardDescuento imagen={Sanlorenzo} nombre={"Remera San Lorenzo"} precioOriginal={"$90.000"} precioDescuento={"$60.000"} />
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

export default BuzosCat