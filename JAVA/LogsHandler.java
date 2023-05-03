import java.io.File;
import java.io.FileWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/***
 * Cette classe permet la gestion des erreurs en utilisant des fichier de logs
 * Permet d'avoir des traces de l'activité du serveur java
 * @author Aladin-Saleh
 * @version 1.0
***/


public class LogsHandler {




    // Attributs
    private String      path;
    private String      fileName;
    private File        file;
    private FileWriter  fileWriter;

    /**
     * En créant un objet static cela permet de n'instantier qu'une seule fois l'objet DateFormat.
     * L'ancienne version de la classe LogsHandler initialisait à chaque fois un nouvel objet DateFormat ce qui generait une erreur (heap space error).
     * La solution est de créer un objet static qui sera partagé par toutes les instances de la classe LogsHandler.
     */
    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // Exemple : 2020-12-01 12:00:00





    // Constructeur
    public LogsHandler(String path, String fileName) 
    {
        this.path       = path;
        this.fileName   = fileName;

        // Création d'un repertoire de logs
        File logsDir = new File(this.path);
        if (!logsDir.exists()) {
            logsDir.mkdir();
            System.out.println("Le repertoire de logs a été crée.");
        }
        
        this.file       = new File(this.path + this.fileName);
        this.fileWriter = null;
        System.out.println("Création d'un gestionnaire de logs.");
    }


    private static String getCurrentDate() 
    {
        return DATE_FORMAT.format(System.currentTimeMillis());
    }

    // Créer un fichier de logs
    public void createFile() 
    {
        try {
            if (this.file.createNewFile()) {
                System.out.println("Fichier de logs crée.");
            } else {
                System.out.println("Fichier de logs déjà existant.");
            }
        } catch (Exception e) {
            System.out.println("Exception : " + e.getMessage());
        }
    }



    // Ecrire dans un fichier de logs
    public void write(String message)
    {
        try {
            this.fileWriter = new FileWriter(this.file, true);
            this.fileWriter.write(getCurrentDate() + " : " + message + "\n");
            this.fileWriter.close();
        } catch (Exception e) {
            System.out.println("Exception : " + e.getMessage());
        }
    }


}
