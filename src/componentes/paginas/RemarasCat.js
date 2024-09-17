import React from 'react'
import Footer from '../estructura/Footer'
import Nav from '../estructura/Nav'
import BannerGeneral from "../../img/banner-general.png";
import Sanlorenzo from "../../img/sanlorenzo.png";
import "./estilos/home.css"

import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
} from 'semantic-ui-react'

function RemarasCat() {
    return (
        <div>
            <Nav />
            <div>
                <img src={BannerGeneral} width={"100%"} height={"300"} alt="banner" />
            </div>
            <h1 className='text-center'>Remeras</h1>
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
                        <CardHeader>Remeras</CardHeader>
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
            <Footer />
        </div>
    )
}

export default RemarasCat