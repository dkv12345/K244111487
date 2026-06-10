function load_product_data(dataset,tbl_product)
{
    for(var i=0;i<dataset.length;i++)
    {
        tbl_product.innerHTML+=
            "<tr>"+
                "<td>"+dataset[i].id+"</td>"+
                "<td>"+dataset[i].name+"</td>"+
                "<td>"+dataset[i].price+"</td>"+
                "<td><img src='images/ic_remove.png' onclick='delete_product(this)'></td>"+
            "</tr>";
    }
}
function delete_product(img_element)
{
    if(confirm("Are you sure to delete this product?"))
    {
        img_element.parentElement.parentElement.remove();
    }
}