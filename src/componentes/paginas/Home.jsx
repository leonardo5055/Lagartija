import React from 'react'
import BannerGeneral from "../../img/banner-general.png";
import Sanlorenzo from "../../img/sanlorenzo.png";
import Remera from "../../img/remera1.jpg";
import Pantalon from "../../img/pantalon1.png"
import "./estilos/home.css"

import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image,
} from 'semantic-ui-react'

function Home() {
    return (
        <div>
            <div>
                <img src={BannerGeneral} width={"100%"} height={"300"} alt="banner" />
            </div>
            <h1 className='text-center'>Ofertas</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Remera} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera Mars</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$20.000</span></CardMeta>
                        <CardDescription>$15.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Pantalon} wrapped ui={false}  width="250px"/>
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
            </div>
            <hr />
            <h1 className='text-center'>Remeras más vendidas</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
            </div>
            <hr />
            <h1 className='text-center'>Pantalones más vendidos</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
            </div>
            <hr />
            <h1 className='text-center'>Buzos más vendidos</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
            </div>
            <hr />
            <h1 className='text-center'>Zapatillas más vendidas</h1>
            <div className='d-flex gap-5 justify-content-center'>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <Image src={Sanlorenzo} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Remera San Lorenzo</CardHeader>
                        <CardMeta><span className='date text-decoration-line-through'>$90.000</span></CardMeta>
                        <CardDescription>$60.000 <span className='descuento'>- Descuento</span></CardDescription>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Home