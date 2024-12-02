// function to search a key to  be deleted
function findElement(arr,n,key)
{
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
    return -1;
} 
     
// Function to delete an element
function deleteElement(arr,n,key)
{
    // Find position of element to be deleted
    let pos = findElement(arr, n, key);
      
    if (pos == -1)
    {
        document.write("Element not found");
        return n;
    }
    // Deleting element
    let i;
    for (i = pos; i< n - 1; i++)
        arr[i] = arr[i + 1];
    return n - 1;
}

// javascript Program to Insert an element
// at a specific position in an Array
function insertElement(arr, n, x, pos)
{
    // shift elements to the right
    // which are on the right side of pos
    var i = n - 1;
    for (i; i >= pos; i--)
    {
        arr[i + 1] = arr[i];
    }
    arr[pos] = x;
}