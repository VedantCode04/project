import java.util.*;

class OTP {
    static void generate(int n)
    {
        System.out.println("   Your OTP is generating........ ");

        Random r = new Random();

        Vector<Integer> v = new Vector<Integer>(n);

        for (int i = 0; i < n; ++i) {
            int rand = r.nextInt() % 10;
            rand = Math.abs(rand); //to convert into positive number if negative
            v.add(rand);
        }

        System.out.print("   OTP = ");

        for (int i : v) {
            System.out.print(i);
        }

    }

    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);


        while (true) {

            System.out.println("->SELECT LENGTH OF OTP ");
            System.out.println();
            System.out.println(" > Enter 1 for 4 digits ");
            System.out.println(" > Enter 2 for 6 digits ");
            System.out.println(" > Enter 3 for 8 digits ");
            System.out.print("   ");
            int n = s.nextInt();

            switch (n) {
            case 1:
                generate(4);
                break;
            case 2:
                generate(6);
                break;
            case 3:
                generate(8);
                break;
            default:
                System.out.println("Enter valid size.");
            }

            System.out.println("\n\n   Press any key to continue or [N/n] to exit: ");
            System.out.print("   ");
            char c = s.next().charAt(0);
            if (c == 'n' || c == 'N') {
                break;
            }
        }

        System.out.println("-------------------------Thanks for using. Visit us again-----------------------");
    }
}
