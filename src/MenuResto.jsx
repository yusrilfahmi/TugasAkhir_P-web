import './MenuResto.css'

function MenuResto() {

    const isMakanan = true;
    const menu = [
        'Nasi Bakar',
        'Mie Ayam',
        'Ayam Goreng'
    ]

    const menuV2 = [
        {nama: 'Nasi Bakar', harga: 'Rp.20.000'},
        {nama: 'Mie Ayam', harga: '10.000'},
        {nama: 'Ayam Goreng', harga: '15.000'}
    ]

    return(
        <>
        {
            menuV2.map((item, index) => {
                return(
                    <div className="menu-item" key={index}>
                        <div><b>Nama Menu: </b>{item.nama}</div>
                        <div><b>Harga: </b>{item.harga}</div>
                    </div>
                )
            })
        }
        </>
    )
}

{/* {
            (isMakanan == true) ? (<div>Tipe: Makanan</div>) : (<div>Tipe: Minuman</div>)
            }
            {
                (isMakanan == true) && (<div>Tipe: Makanan</div>)
            } */}

export default MenuResto