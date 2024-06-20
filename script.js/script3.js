//display Prime Numbers from 1 to 100

{
    var i;
    for(i=1;i<=100;i++)
        {
            var flag=0;
            for(var j=2;j<i;j++)
                {
                    if(i%j==0)
                        {
                            flag=1;
                            break;
                        }
                }
                if(flag==0)
                    {
                        document.write(i+" ")
                    }
        }
}